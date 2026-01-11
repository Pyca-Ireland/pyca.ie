import Image from "next/image"
import Link from "next/link"

export default function main_page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 gap-8 sm:gap-10 lg:gap-12 bg-black">
      <Link
        href="https://www.linkedin.com/company/pyca-ireland"
        className="hover:scale-120 duration-300"
      >
        <Image
          src="/pyca_banner.png"
          alt="banner"
          width={2558}
          height={1270}
          priority
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto "
        />
      </Link>
      <p className="text-base sm:text text-gray-300 text-center max-w-lg leading-relaxed italic">
        Empowering youth education through innovation
      </p>
    </main>
  )
}
