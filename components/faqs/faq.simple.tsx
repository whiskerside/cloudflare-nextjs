import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "What is Sprunki Corruptbox?🤔",
    answer:
      "Sprunki Corruptbox is a super cool fan-made game, a mod for Incredibox! It's got a spooky, glitchy vibe with eerie sounds and darkly artistic characters. You get to make your own haunting tunes by dragging and dropping these corrupted characters. There are multiple versions—Sprunki Corruptbox Original, Sprunki Corruptbox 1, Sprunki Corruptbox 2, and Sprunki Corruptbox 3—each adding new spooky sounds and characters! 👻",
  },
  {
    question: "How do I play Sprunki Corruptbox? 🎮",
    answer:
      "No downloads needed, our friend! Sprunki Corruptbox is a website-based game. Just open it up in your browser on your computer or phone and start creating music. It’s that easy! No installations, no fuss—just pure musical mayhem! 🎉",
  },
  {
    question: "Who is Sprunki Corruptbox for? 🤔",
    answer:
      "Sprunki Corruptbox is for everyone! Whether you’re a total music pro or just starting out, the simple drag-and-drop interface makes it fun for all ages. It’s perfect for casual players looking for some creative fun, and it also has hidden depths for more experienced musicians to explore. 🎶",
  },
  {
    question: "What makes Sprunki Corruptbox special? ✨",
    answer:
      "Sprunki Corruptbox boasts corrupted visuals—glitchy effects and dark pixel art—that create a really immersive, spooky atmosphere. The sounds are equally unsettling, with static noise, distorted rhythms, and eerie melodies. But don't worry, it's still fun! You can unlock special tracks and animations by experimenting with different sound combinations. Plus, there’s a whole community to share your creations with! 🤩",
  },
  {
    question: "Are there different versions of Sprunki Corruptbox? 🕹️",
    answer:
      "Yes! There’s Sprunki Corruptbox Original, and then Sprunki Corruptbox versions 1, 2, and 3. Each version offers new sounds, characters, and maybe even some surprises! Exploring all the different Sprunki Corruptbox versions is part of the fun! 😉",
  },
  {
    question: "Can I share my Sprunki Corruptbox creations? 🤝",
    answer:
      "Absolutely! Sprunki Corruptbox encourages sharing. Record your masterpieces and share them with your friends and the wider Sprunki Corruptbox community. Show off your musical genius! 🏆",
  },
];

const FaqSimple = () => {
  return (
    <section className="py-20">
      <div className="container p-4">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-2 mb-4 text-xl font-semibold md:mb-11 md:text-4xl">
            Sprunki Corruptbox Frequently Asked Questions
          </h1>
          {/* <p className="mt-6 font-medium text-muted-foreground">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p> */}
        </div>
        <div className="mx-auto mt-14 max-w-screen-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSimple;
