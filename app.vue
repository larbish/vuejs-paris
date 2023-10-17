<template>
  <UMain>
    <UContainer>
      <UHeader>
        <template #logo>
          <span>
            Studio Demo
          </span>
        </template>
        <template #right>
          <UColorModeButton />
        </template>
      </UHeader>

      <NuxtPage />

      <UFooter>
        <template #right>
          <div class="flex items-center justify-center gap-4">
            <UButton
              icon="i-mdi-github"
              :to="`https://github.com/larbish`"
              color="gray"
              variant="ghost"
              target="_blank"
              :padded="false"
            />
            <UButton
              icon="i-mdi-twitter"
              :to="`https://twitter.com/_larbish`"
              color="gray"
              variant="ghost"
              target="_blank"
              :padded="false"
            />
          </div>
        </template>
      </UFooter>
    </UContainer>
  </UMain>
</template>

<script setup lang="ts">
// const { header, footer, socials } = useAppConfig()
</script>
