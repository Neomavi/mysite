/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protokoll hier anpassen, falls notwendig (z.B. http)
        hostname: "localhost",
        port: "", // Hier den Port eintragen, falls verwendet, ansonsten leer lassen
      },
      // Weitere Remote-Patterns hier hinzufügen, falls nötig
    ],
  },
};

module.exports = nextConfig;
