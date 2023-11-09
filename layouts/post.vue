<template>
	<div
		class="bg-transparent text-white p-[64px] max-[800px]:px-[32px] h-screen min-h-screen overflow-y-hidden overflow-x-hidden flex flex-col gap-[64px] z-10 max-[800px]:overflow-y-scroll"
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
			<slot />
			<div
				id="right"
				class="w-fit h-full max-[800px]:h-fit max-[800px]:w-full flex flex-col gap-[32px] align-middle place-items-center"
			>
			<div class="flex min-[800px]:flex-col gap-[16px]">
					<!-- <NuxtLink
						to="https://bento.me/dukc"
						target="_blank"
						class="duration-200 hover:scale-150 active:scale-50"
					>
						<nuxt-img width="36" alt="Bento" src="/icons/bento.svg" />
					</NuxtLink> -->
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
						to="https://github.com/dukcc"
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
		class="relative bottom-[80vh] left-[10vw] h-[40rem] w-[100rem] animate-pulse-slow bg-gradient-to-tr from-brand-blue-1 to-brand-purple blur-[88px] -z-10"
	></div>
</template>
