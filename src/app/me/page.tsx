import { Terminal } from "@/components/terminal";

function calculateExperience(startDate: Date) {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    totalYears: Math.floor(years + months / 12),
  };
}

export default function Page() {
  return (
    <section className="h-screen flex justify-center items-center bg-black/95">
      <Terminal
        commands={[
          "whoami",
          "cat profile.txt",
          "cat experience.txt",
          "cat skills.txt",
          "echo $CONTACT",
        ]}
        outputs={{
          0: [
            "  Noppawat Chochaipantawong (Gopgap)",
            "  Software Engineer",
            "  Bangkok",
          ],
          1: [
            `  ${calculateExperience(new Date(2022, 5)).totalYears.toFixed(
              1
            )}+ years of experience`,
            "  Focus on scalable systems & clean architecture",
          ],
          2: [
            "  > Developed and maintained scalable full-stack applications",
            "  > Designed backend architecture and RESTful APIs",
            "  > Optimized system performance and database queries",
            "  > Integrated external services and real-time systems",
            "  > Delivered reliable production systems in cross-functional teams",
          ],
          3: [
            "  Tech Stack:",
            "    frontend  → React, Next.js, React Native",
            "    backend   → Node.js, NestJS, Go",
            "    database  → PostgreSQL, Redis, Firebase",
            "    tools     → Docker, AWS, k6",
          ],
          4: [
            "  email   → noppawat3984@gmail.com",
            "  github  → github.com/Noppawat3939",
          ],
        }}
        delayBetweenCommands={1500}
        initialDelay={800}
      />
    </section>
  );
}
