import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, "public", "marquee");

const services = [
  {
    name: "software",
    color: "#2563EB",
    prompt: "modern software development, code on screens, IDE, dark blue theme, futuristic",
  },
  {
    name: "ia",
    color: "#8B5CF6",
    prompt: "artificial intelligence, neural network visualization, glowing nodes, purple theme",
  },
  {
    name: "cloud",
    color: "#06B6D4",
    prompt: "cloud computing, floating servers, data streams, cyan digital sky",
  },
  {
    name: "database",
    color: "#F59E0B",
    prompt: "database server racks, data storage, glowing amber lights, tech corridor",
  },
  {
    name: "hardware",
    color: "#EF4444",
    prompt: "computer hardware, circuit boards, processors, red LED lights, tech lab",
  },
  {
    name: "redes",
    color: "#10B981",
    prompt: "network infrastructure, ethernet cables, switches, green data flow",
  },
  {
    name: "helpdesk",
    color: "#F97316",
    prompt: "customer support, helpdesk operators, multiple monitors, orange theme",
  },
  {
    name: "diseno",
    color: "#EC4899",
    prompt: "UI UX design, creative workspace, tablet with mockups, pink theme",
  },
  {
    name: "marketing",
    color: "#EF4444",
    prompt: "digital marketing, analytics charts, social media, campaign dashboard",
  },
  {
    name: "ciberseguridad",
    color: "#EF4444",
    prompt: "cybersecurity, digital shield, hacker protection, red alert theme",
  },
  {
    name: "consultoria",
    color: "#6366F1",
    prompt: "business consulting, meeting room, strategy presentation, indigo theme",
  },
];

const servicesRow2 = [
  {
    name: "marketplace",
    color: "#14B8A6",
    prompt: "digital marketplace, online store, shopping cart, teal theme",
  },
  {
    name: "transporte",
    color: "#F97316",
    prompt: "logistics, delivery vans, cargo transport, orange shipping theme",
  },
  {
    name: "qpacks",
    color: "#3B82F6",
    prompt: "tech support packages, bundled software, blue packaging boxes",
  },
  {
    name: "planika",
    color: "#8B5CF6",
    prompt: "education technology, school management, purple learning platform",
  },
  {
    name: "web",
    color: "#2563EB",
    prompt: "web development, responsive design, browser screens, blue theme",
  },
  {
    name: "odoo",
    color: "#F59E0B",
    prompt: "enterprise resource planning, business software dashboard, amber theme",
  },
  {
    name: "mobile",
    color: "#10B981",
    prompt: "mobile app development, smartphones, green app interfaces",
  },
  {
    name: "devops",
    color: "#06B6D4",
    prompt: "DevOps pipeline, CI/CD, automation, cyan deployment theme",
  },
  {
    name: "iot",
    color: "#6366F1",
    prompt: "internet of things, smart devices, sensors, indigo connected theme",
  },
  {
    name: "blockchain",
    color: "#8B5CF6",
    prompt: "blockchain technology, digital ledger, purple crypto theme",
  },
];

const allServices = [...services, ...servicesRow2];

function getAiImageUrl(prompt, index) {
  const encodedPrompt = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=420&height=270&nologo=true&seed=${index}`;
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;

    const request = protocol.get(url, { timeout: 60000 }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location || url, dest)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }

      const fileStream = fs.createWriteStream(dest);
      response.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        resolve();
      });

      fileStream.on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    });

    request.on("error", reject);
    request.on("timeout", () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`Generando ${allServices.length} imágenes con IA...\n`);

  let completed = 0;
  let failed = 0;

  for (let i = 0; i < allServices.length; i++) {
    const service = allServices[i];
    const filename = `${String(i + 1).padStart(2, "0")}-${service.name}.jpg`;
    const dest = path.join(OUTPUT_DIR, filename);
    const url = getAiImageUrl(service.prompt, i + 1);

    if (fs.existsSync(dest)) {
      console.log(`⏭  ${filename} ya existe, omitiendo...`);
      completed++;
      continue;
    }

    try {
      await downloadFile(url, dest);
      const stats = fs.statSync(dest);
      const sizeKB = (stats.size / 1024).toFixed(1);
      console.log(`✅ ${filename} (${sizeKB} KB)`);
      completed++;
    } catch (error) {
      console.error(`❌ ${filename}: ${error instanceof Error ? error.message : error}`);
      failed++;
    }

    // Pequeña pausa para no saturar el API
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log(`\n📊 Resumen:`);
  console.log(`   ✅ Exitosas: ${completed}`);
  console.log(`   ❌ Fallidas: ${failed}`);
  console.log(`   📁 Carpeta: ${OUTPUT_DIR}`);

  if (failed > 0) {
    process.exitCode = 1;
  }
}

main();
