import Image from "next/image"
import Link from "next/link"

export default function MainPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="min-h-screen flex justify-center px-4">
        <div className="my-8 w-full max-w-xl flex flex-col">
          
          <div className="relative w-full aspect-19/7">
            <Image
              src="/pyca_banner.png"
              alt="Pyca Ireland - Banner"
              fill /*width*/
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>

          <div>
            Work in progress 
            TODO: Better font, size, color etc. - Then also implement text
            rn the font looks terrible etc, theres alot to reiterate upon
          </div>

        </div>
      </div>
    </main>
  )
}
