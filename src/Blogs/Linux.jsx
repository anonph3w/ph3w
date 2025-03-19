import React from "react";
import Footer from "../components/Footer";
import torvalds from "../assets/torvalds.png";
import terminal from "../assets/terminal.png";
import terminalsettings from "../assets/terminalsettings.png";

function Linux() {
  return (
    <>
      <hr className="w-40 mx-5 opacity-40" />
      <h1 className="mx-5 text-3xl geist pt-5">Linux</h1>
      <p className="mx-5 geist opacity-40 py-2">
        yapping about my linux experience
      </p>

      <div className="py-4 mx-7 md:mx-10 geist md:text-base ">
        <p className="py-3">
          I’ve been a Windows user since 2022. When I first got my laptop, I
          started noticing people around the internet complaining about how bad
          Windows is, which made me curious about Linux. The fact that Linux was
          created by this guy still gives me chills:
        </p>

        <div className="flex justify-center py-5">
          <img src={torvalds} alt="" className="" />
        </div>

        <p className="py-3">
          But before switching to Linux, I had to know why I was switching. So,
          let’s talk about the flaws that really irritated me:
        </p>

        <p className="py-3">
          <li>Auto-updates whenever it wants</li>

          <li className="py-2">
            Useless permissions (like asking for location access when there’s no
            need for it)
          </li>

          <li>
            Personalized ads (countless ads from the lock screen to everywhere
            else—had to turn them off manually)
          </li>

          <li className="py-2">
            And honestly, I got bored of the UI and wanted to try something
            different.
          </li>
        </p>

        <p className="py-5 font-semibold">Choosing a Linux Distro</p>

        <p>
          After discovering different Linux distros, I had my own assumptions
          about them:
        </p>

        <p className="py-2">
          <li>Mint – used by beginners</li>

          <li className="py-2">
            Arch – used by the extra smart people who have a lot of time
          </li>
        </p>

        <p className="py-3">
          I eventually decided to try Fedora. First, I installed it on a virtual
          machine to see how it felt, and it was pretty good. I had tried Ubuntu
          on my friend’s laptop before, but I wasn’t that impressed by it. One
          thing I liked about Linux distros was the fonts (Noto Sans is nice).
        </p>

        <p className="py-3">
          I started using Fedora, and after a few days, the virtual box started
          consuming more battery. By then, I had gotten used to the Linux
          commands, and I loved how you have to actually put in effort to get
          things done, instead of just clicking once and being done with it.
        </p>

        <p className="py-5 font-semibold">Troubleshooting with Linux</p>

        <p>
          One thing that really stood out during my switch to Linux was how
          often I had to troubleshoot things. When stuff didn’t work the way I
          expected, I had to put in a little extra work to figure it out. I
          learned to rely a lot on forums and guides, which honestly made me
          feel more resourceful. Fixing small issues by reading through the
          Linux community’s solutions or figuring out terminal commands felt
          rewarding, even if it was time-consuming. It’s a bit like solving a
          puzzle, and if you’re into problem-solving, it’s a pretty cool
          experience.
        </p>

        <p className="py-3">
          I’m not sure why, but I switched to Kali Linux after some time. That’s
          when I got to know about Vim and started messing with it. I found it
          really exciting, by the way.
        </p>

        <p className="py-3">I also learned some cool commands like:</p>

        <p>
          <li>
            Shutting down the PC from the terminal:{" "}
            <span className="bg-gray-400 rounded text-black px-2">
              sudo shutdown -h now
            </span>
          </li>

          <li className="py-2">
            You can use CLI tools for basic tasks, so you don’t have to go to
            the browser for simple things.
          </li>
        </p>

        <p className="py-5 font-semibold">Final Thoughts</p>

        <p>
          If you’re thinking about switching to Linux, keep in mind that it’s
          really time-consuming. But it’s not useless; you’ll learn a lot while
          using it.
        </p>

        <p className="py-3">
          I switched back to Windows because I value my time. I’m somewhat okay
          with the annoying pop-ups, and I can block them pretty easily.
        </p>

        <p className="py-3">
          One thing Linux taught me is how to use the terminal efficiently. I
          want to share something that many of you might already know, but
          still, here it is:
        </p>

        <p className="py-3">Here’s how you can make your terminal look good:</p>

        <div className="flex justify-center py-5">
          <img src={terminal} alt="" className="" />
        </div>

        <p className="pb-3">
          <li>Open PowerShell.</li>
          <li className="py-2">
            Press{" "}
            <span className="bg-gray-400 rounded text-black px-2">
              Ctrl + ,
            </span>
          </li>
          <li>This will open the settings page</li>

          <div className="flex justify-center py-5">
            <img src={terminalsettings} alt="" className="" />
          </div>
        </p>

        <p>
          You’ll get to choose the customizations you want. Just explore and
          select the settings that look good to you.
        </p>

        <p className="py-3">
          Look if you have the time, you can mess around with Linux, but if you
          don’t, then you’ll have to be happy with Windows.
        </p>

        <p className="flex text-sm my-1 items-center gap-2 border-s px-2 py-3 rounded opacity-50">
          "Linux is only free if your time has no value." – Jamie Zawinski
        </p>

        <p className="py-3">See ya, anons.</p>
      </div>

      <Footer />
    </>
  );
}

export default Linux;
