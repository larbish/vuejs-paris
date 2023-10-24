<template>
  <div>
    <UHeader>
      <template #logo>
        <Icon v-if="header.icon" :name="header.icon" class="h-10 w-10" />
        <span v-else>
          {{ header.title }}
        </span>
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <UMain>
      <NuxtPage />
    </UMain>
    <UFooter
      v-if="footer.display"
    >
      <template #right>
        <div class="flex items-center justify-center gap-4">
          <UButton
            v-if="socials.github"
            icon="i-mdi-github"
            :to="`https://github.com/${socials.github}`"
            color="gray"
            variant="ghost"
            target="_blank"
            :padded="false"
          />
          <UButton
            v-if="socials.twitter"
            icon="i-mdi-twitter"
            :to="`https://twitter.com/${socials.twitter}`"
            color="gray"
            variant="ghost"
            target="_blank"
            :padded="false"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>

<script setup lang="ts">
const { header, footer, socials } = useAppConfig()
</script>
