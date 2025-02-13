import React from "react";
import sadpablo from '../assets/sad-pablo.jpg';
import Footer from "../components/Footer.jsx";

function Failure() {
    return (
        <>
            <hr className="w-40 mx-5 opacity-40" />
            <h1 className="mx-5 text-3xl geist pt-5">Failure</h1>
            <p className="mx-5 geist opacity-40 py-2">rant about my failure in a college subject</p>
            <div className="flex justify-center py-5"><img src={sadpablo} alt="" className="md:size-100 size-70" /></div>

            <div className="py-4 mx-7 md:mx-10 geist md:text-base ">
                <p className="py-3">
                    February 10, around 5 in the evening, my roommate got up and started getting ready for the gym. He was looking into his phone and got the notification saying the results have been declared.
                </p>
                <p className="py-3">
                    A moment of silence and we hurriedly go towards our laptops, waiting for the site to load.
                </p>

                <p className="py-3">
                    As he checked his results, he looked at me and said, "I got back in 2 subjects." I thought, "Why wonder, that was supposed to happen. We didn’t study at all. Hope mine is good."
                </p>

                <p className="py-3">
                    I checked mine.
                </p>


                <p className="py-3">
                    The moment I saw the 'F' in one subject, I started to think about my life choices. What did I do? Not in my life have I ever failed. It felt like a humiliation. I started to think where this could have gone wrong, like why.
                </p>


                <p className="py-3">
                    It might sound like I'm coping because I failed, but I never gave respect to my degree. Doing theory feels useless to me. I wrote all the papers precisely around 40 marks just to pass the exam. Never knew this mistake would cause me great trouble.
                </p>


                <p className="py-3">
                    You think this is nothing, just one subject, you can pass that in the next sem. It’s not about passing it in the next sem, it’s about the fail mark that will show there, and it will haunt me until I pass the exam
                </p>


                <p className="py-3">
                    I don’t have to let my failing grade poison my energy, but think about it, when you fail, the thoughts come to your mind like what have you done? You should have taken it seriously. Now every now and then batchmates asking, "What's your result?" (I'm ashamed). I had to tell the truth that I failed.
                </p>


                <p className="py-3">
                    They look at you in a very strange way, like "How could you?" Sometimes I think they are happy inside that I failed.
                </p>

                <p className="py-3">
                    Everyone looks at you like you are a failure.
                </p>

                <p className="flex text-sm my-1 items-center gap-2 border-s px-2 py-3 rounded opacity-50">
                    The real failure would be letting this moment break my confidence.
                </p>

                <p className="py-3">
                    Anyways, I have to take it more seriously this time. I won’t let the exams decide what I'm capable of or not.
                </p>


                <p className="py-3">
                    I’ll share the result update around May 2025.
                </p>



            </div>

            <Footer />
        </>
    )
}

export default Failure