<script>
import {gsap} from "gsap";

export default {
	mounted() {
		//header
		gsap.fromTo(
			this.$refs.header,
			{autoAlpha: 0, y: -100},
			{autoAlpha: 1, y: 0, duration: 0.87, ease: "power4.inOut"}
		);
		//Sub-header
		gsap.fromTo(
			this.$refs.sub_header,
			{autoAlpha: 0, x: -100},
			{autoAlpha: 1, x: 0, duration: 1.87, ease: "power4.inOut"}
		);
	},
};
</script>

<template>
	<div
		class=" bg-transparent text-white p-[64px] max-[800px]:px-[24px] max-[800px]:pt-[48px] max-[800px]:pb-[24px] h-screen min-h-screen overflow-y-hidden overflow-x-hidden flex flex-col gap-[64px] z-10 max-[800px]:overflow-y-auto"
	>
		<nav
			class="flex w-full align-middle place-content-between h-fit place-items-center"
		>
			<nuxt-link to="/"
				><nuxt-img
					class="duration-200 hover:scale-150 active:scale-50"
					src="/logo.svg"
					width="64"
			/></nuxt-link>
			<Status />
		</nav>
		<div class="min-h-0 w-full flex max-[800px]:flex-col gap-[64px]">
			<div
				id="left"
				class="w-full h-full flex flex-col gap-[32px] max-[800px]:gap-[24px]"
			>
				<div class="flex flex-col gap-[32px]">
					<h1
						class=" font-bebasNeue text-[100px] max-[800px]:text-[75px] leading-[50%] opacity-0"
						ref="header"
					>
						Robert Ling
					</h1>
					<p class="text-[20px] max-[460px]:hidden"
						ref="sub_header"
					>
						Off-Season Programmer & UI/UX Designer.
					</p>
					<div class="flex gap-[32px]"></div>
				</div>
				<slot />
			</div>
			<div
				id="right"
				class="w-fit h-full max-[800px]:h-fit max-[800px]:hidden max-[800px]:w-full flex flex-col gap-[32px] align-middle place-items-center"
			>
				<div class="flex min-[800px]:flex-col gap-[16px]">
					<NuxtLink
						to="https://bento.me/uxrobertling"
						target="_blank"
						class="duration-200 hover:scale-150 active:scale-50"
					>
						<nuxt-img width="36" alt="Bento" src="/icons/bento.svg" />
					</NuxtLink>
					<!-- <NuxtLink
						to="https://www.youtube.com/@dukkcc"
						target="_blank"
						class="duration-200 hover:scale-150 active:scale-50"
					>
						<nuxt-img width="36" alt="YouTube" src="/icons/yt.svg" />
					</NuxtLink> -->
					<NuxtLink
						to="https://www.behance.net/robertling1"
						target="_blank"
						class="duration-200 hover:scale-150 active:scale-50"
					>
						<nuxt-img width="36" alt="Behance" src="/icons/behance.svg" />
					</NuxtLink>
					<!-- <NuxtLink
						to="https://discord.gg/kVS5dEekmT"
						target="_blank"
						class="duration-200 hover:scale-150 active:scale-50"
					>
						<nuxt-img width="36" alt="Discord" src="/icons/discord.svg" />
					</NuxtLink> -->
					<NuxtLink
						to="https://github.com/RobertLing1228"
						target="_blank"
						class="duration-200 hover:scale-150 active:scale-50"
					>
						<nuxt-img width="36" alt="GitHub" src="/icons/github.svg" />
					</NuxtLink>
					<NuxtLink
						to="https://www.linkedin.com/in/robert-ling-1274a728b/"
						target="_blank"
						class="duration-200 hover:scale-150 active:scale-50"
					>
						<nuxt-img width="36" alt="LinkedIn" src="/icons/linkedin.svg" />
					</NuxtLink>
				</div>
				<div
					class="w-[1px] h-full border max-[800px]:hidden border-white/10"
				></div>
			</div>
		</div>
	</div>
	<div
		class="relative bottom-[60vh] left-[10vw] h-[30rem] w-[100rem] animate-pulse-slow bg-gradient-to-tr from-brand-blue-1 to-brand-purple blur-[88px] -z-10"
	></div>
</template>