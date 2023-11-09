<template>
    <div
        class="flex gap-[32px] min-h-0 max-[800px]:flex-col max-[800px]:min-h-[500px]"
    >
        <PagesNav selected="contact" />
        <div
            class="w-full overflow-hidden h-full flex bg-[#0f0f0f]/60 border border-white/10 backdrop-blur-[100px] rounded-[10px]"
        >
            <div
                class="flex flex-col max-[800px]:place-content-start gap-[128px] p-[64px] max-[800px]:p-[32px] h-full w-full overflow-y-scroll"
            >
                <div class="flex flex-col gap-[32px] h-fit w-full">
                    <h1 class="text-[40px] font-medium">Contact</h1>
                    <p class="text-[18px] leading-[225%]">                        
                        Want to work with me? Send me a message via LinkedIn or
                        Email. Let's keep things professional.
                    </p>
                    <h3 class="text-[28px] font-medium">LinkedIn</h3>
                    <p
                        class="text-[18px] w-fit"
                    >
                    LinkedIn ID: <u>robert-linglb</u>
                    </p>
                    <h3 class="text-[28px] font-medium">Email</h3>
                    <form
                        class="flex flex-col gap-[16px]"
                        action="https://formsubmit.io/send/robert.llb90@gmail.com"
                        method="POST"                        
                    >
                        <label for="name" class="text-[18px]">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            v-model="name"
                            class="bg-[#0f0f0f]/60 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
                        />
                        <label for="email" class="text-[18px]">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            class="bg-[#0f0f0f]/60 border-2 w-full border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25"
                        />
                        <label for="message" class="text-[18px]">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            class="bg-[#0f0f0f]/60 border-2 w-full h-32 border-white/10 rounded-[10px] py-2 px-3 placeholder-white/25 min-h-[48px]"
                        ></textarea>
                        <button
                            class="bg-brand-blue-1/75 rounded-[10px] border-2 border-white/10 px-[16px] py-[8px] h-fit w-full hover:bg-brand-blue-1 hover:-translate-y-1 active:bg-brand-blue-1/50 active:translate-y-2 duration-200 cursor-pointer backdrop-blur-lg"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <nuxt-img
                src="/contact.png"
                format="webp"
                fit="contain"
                loading="lazy"
                alt="Contact image"
                class="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
            />
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: "Contact",
    ogTitle: "Contact",
    description:
        "I'm Robert. I am a UI/UX Designer, UI, graphic, & motion design, front-end web development.",
    ogDescription:
        "I'm Robert. I am a UI/UX Designer, UI, graphic, & motion design, front-end web development.",
    ogImage: "/seoCover.png",
    twitterCard: "summary_large_image",
});
</script>
