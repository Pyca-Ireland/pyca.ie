import Image from "next/image"

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
          <div className="border-b border-neutral-800">
            <div className="space-y-4 text-left px-2 py-2 text">
              <div className="text-2xl font-extrabold">
                Leaving Cert Computer Science Audit 2025
              </div>
            </div>
          </div>
          <div className="border-b border-neutral-800">
            <div className="space-y-4 text-left px-2 py-2">
              <div className="text-xs">
                Last updated: 14/01/2026
              </div>
            </div>
          </div>
          <div className="space-y-4 text-left p-4">
            <p>This is a work in progress.</p>
          </div>
        </div>
      </div>
    </main>
  );
}