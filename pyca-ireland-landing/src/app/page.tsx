import Image from "next/image"
import SocialLinks from "@/components/social_links"

export default function MainPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="min-h-screen flex justify-center px-4">
        <div className="my-8 w-full max-w-xl flex flex-col border border-neutral-800">
          
          <div className="relative w-full aspect-19/7 border border-x-0 border-t-0 border-neutral-800">
            <Image
              src="/pyca_banner_scaled.png"
              alt="Pyca Ireland - Banner"
              fill /*width*/
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div className="space-y-4 text-left p-4">
            <p>
              The world of computer science has continued to grow since its introduction into the Senior Cycle curriculum, with 3,515 students in the 2025 cohort — a massive increase compared to its introductory cohort of 739 students in 2020<a href="https://github.com/Pyca-Ireland/lccs-audit"><b>¹</b></a>.
            </p>
            <p>
              Pyca Ireland is a student-led non-profit organisation dedicated to addressing underlying challenges within STEM subjects, particularly computer science.
            </p>
            <p>
              Through a person-centred approach and a strong focus on innovation, we develop modern educational tools that leverage artificial intelligence.
            </p>
            <p>
              However, another key issue arises in our mission to provide these tools: the rise of large language models (LLMs) such as ChatGPT, Gemini, and Copilot.
            </p>
            <p>
              Schools across Ireland are sceptical about utilising artificial intelligence, understandably so given the potential negative impacts it may impose<a href="https://www.webwise.ie/trending/ai-in-education-survey/#:~:text=Despite%20their%20optimism,and%20inappropriate%20information"><b>²</b></a>.
            </p>
            <p>
              Through our core goal of creating innovative solutions to support education, we are actively working to ensure that our use of artificial intelligence serves as a strong foundation for helping post-primary schools safely bridge the gap between traditional education and artificial intelligence.
            </p>
            <p>
              Empowering youth education through innovation does not only mean deploying education-ready tools powered by technology.
            </p>
            <p>
              It also means fostering creative thinking and innovation among students across Ireland. This is why we are always open to hearing innovative ideas on how education can be improved, helping to make STEM subjects such as computer science more accessible.
            </p>
            <p>
              We are currently in the early stages of development and are actively seeking input from students, as well as partnerships and sponsorship opportunities.
            </p>
          </div>

          <SocialLinks/>
          
          <footer className="flex justify-center mb-4 text-xs">
            <a href="/audits/lccs-25"><u>LCCS Course Y'25 Audit</u></a>&nbsp;|&nbsp;educate@pyca.ie
          </footer>

        </div>
      </div>
    </main>
  )
}
