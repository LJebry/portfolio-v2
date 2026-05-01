import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { StoryViewer, type Story } from "@/components/ui/story-viewer";

const storyTimestamp = "2026-04-29T20:30:00-04:00";

const storyUsers: Array<{
  username: string;
  avatar: string;
  timestamp: string;
  stories: Story[];
}> = [
  {
    username: "Wifey",
    avatar: "/gallery/wifey-nyc-subway.jpeg",
    timestamp: storyTimestamp,
    stories: [
      {
        id: "wifey-1",
        type: "image",
        src: "/gallery/wifey-nyc-subway.jpeg",
      },
      {
        id: "wifey-2",
        type: "image",
        src: "/gallery/wifey-nyc-upside-down.jpeg",
      },
      {
        id: "wifey-3",
        type: "image",
        src: "/gallery/portrait-stage.jpeg",
      },
    ],
  },
  {
    username: "NYC",
    avatar: "/gallery/nyc-skyline.jpeg",
    timestamp: "2026-04-29T19:30:00-04:00",
    stories: [
      {
        id: "nyc-1",
        type: "image",
        src: "/gallery/wifey-nyc-theater.jpeg",
      },
      {
        id: "nyc-2",
        type: "image",
        src: "/gallery/nyc-snowflake.jpeg",
      },
      {
        id: "nyc-3",
        type: "image",
        src: "/gallery/nyc-grand-central.jpeg",
      },
      {
        id: "nyc-4",
        type: "image",
        src: "/gallery/nyc-skyline.jpeg",
      },
      {
        id: "nyc-5",
        type: "image",
        src: "/gallery/nyc-museum.jpeg",
      },
    ],
  },
  {
    username: "Portraits",
    avatar: "/jerry-robayo-portrait-1821.jpeg",
    timestamp: "2026-04-29T18:15:00-04:00",
    stories: [
      {
        id: "portrait-1",
        type: "image",
        src: "/jerry-robayo-portrait-1821.jpeg",
      },
    ],
  },
  {
    username: "My Cats",
    avatar: "/gallery/my-cats.jpeg",
    timestamp: "2026-04-29T14:00:00-04:00",
    stories: [
      {
        id: "cats-1",
        type: "image",
        src: "/gallery/my-cats.jpeg",
      },
    ],
  },
];

const mediaItems = [
  {
    id: 1,
    type: "image" as const,
    title: "Portfolio Portrait",
    desc: "A quiet frame from the portfolio shoot.",
    url: "/jerry-robayo-portrait-1821.jpeg",
    span: "",
  },
  {
    id: 2,
    type: "image" as const,
    title: "Wifey",
    desc: "Goofing around :D",
    url: "/gallery/wifey-nyc-subway.jpeg",
    span: "",
  },
  {
    id: 3,
    type: "image" as const,
    title: "Wifey",
    desc: "Movies Shenanigans",
    url: "/gallery/wifey-nyc-upside-down.jpeg",
    span: "",
  },
  {
    id: 4,
    type: "image" as const,
    title: "Wifey",
    desc: "Also goofing around :D",
    url: "/gallery/portrait-stage.jpeg",
    span: "",
  },
  {
    id: 5,
    type: "image" as const,
    title: "NYC Snowflake",
    desc: "Holiday light caught between city facades.",
    url: "/gallery/nyc-snowflake.jpeg",
    span: "",
  },
  {
    id: 6,
    type: "image" as const,
    title: "Grand Central",
    desc: "A station frame from a New York walk.",
    url: "/gallery/nyc-grand-central.jpeg",
    span: "",
  },
  {
    id: 7,
    type: "image" as const,
    title: "Staten Island Ferry View",
    desc: "Golden hour over the water.",
    url: "/gallery/nyc-skyline.jpeg",
    span: "",
  },
  {
    id: 8,
    type: "image" as const,
    title: "Met Museum",
    desc: "Took this one for an art assignment",
    url: "/gallery/nyc-museum.jpeg",
    span: "",
  },
  {
    id: 9,
    type: "image" as const,
    title: "Tiny Dino",
    desc: "Burnt an año viejo. A New Year’s tradition where you burn an effigy to leave the old year behind. This one was a tiny dinosaur.",
    url: "/gallery/wifey-nyc-theater.jpeg",
    span: "",
  },
  {
    id: 10,
    type: "image" as const,
    title: "My Cats",
    desc: "They dont seem to like eachother much but they sure are cute.",
    url: "/gallery/my-cats.jpeg",
    span: "",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-14 sm:py-16 lg:py-20">
      <div className="mb-10 flex items-center gap-4">
        <p className="font-display text-sm uppercase tracking-[0.28em] text-accent">
          05 / Visual Log
        </p>
        <div className="h-px w-24 bg-secondary/25" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-14">
        <div>
          <h1 className="font-display text-6xl font-semibold uppercase leading-none text-foreground sm:text-7xl lg:text-8xl">
            Gallery
            <span className="block text-accent">Shots.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-9 text-secondary sm:text-2xl sm:leading-10">
            A visual shelf for portraits, Wifey, New York City, my cats, and
            the small details around the portfolio.
          </p>
        </div>

        <div className="min-w-0">
          <div className="border border-secondary/25 bg-surface/55 p-5">
            <h2 className="font-display text-sm uppercase tracking-[0.24em] text-foreground">
              Recent Stories
            </h2>
            <div className="mt-5 flex gap-5 overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-secondary/30 [&::-webkit-scrollbar-track]:bg-transparent">
              {storyUsers.map((user) => (
                <StoryViewer
                  key={user.username}
                  stories={user.stories}
                  username={user.username}
                  avatar={user.avatar}
                  timestamp={user.timestamp}
                />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <InteractiveBentoGallery
              mediaItems={mediaItems}
              title="Bento Gallery"
              description="Open a shot and use the dock to jump between frames."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
