import AnimatedContent from "#/components/animated-content"
import TextType from "#/components/text-type"

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center gap-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <AnimatedContent delay={0.4}>
          <h1 className="text-3xl">
            {"Hi, I'm "}<span className="font-black">{"Altanbagana"}</span>
          </h1>
        </AnimatedContent>
        <AnimatedContent delay={0.6}>
          <p className="text-yellow-300">
            <TextType text={["Gamer", "Designer", "Developer", "Engineer"]} />
            {"based in Mongolia"}
          </p>
        </AnimatedContent>
      </div>
      <AnimatedContent
        delay={0.8}
        className="border border-yellow-300 h-100 w-md p-6 flex flex-col justify-end gap-4"
      >
        {"> hello"}
        <hr className="bg-yellow-300" />
        <input className="outline-none" />
      </AnimatedContent>
    </div>
  )
}
