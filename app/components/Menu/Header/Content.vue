<script setup lang="ts">
defineProps({
  close: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <nav class="p-4 flex flex-col gap-4">
      <div class="flex justify-end">
        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="ghost"
          @click="close"
        />
      </div>

      <UColorModeButton :label="$t('color.button.text')" class="w-full" />

      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/sirthxalot"
        target="_blank"
        icon="i-simple-icons-github"
        :label="'GitHub Profile '+$t('name')"
      />

      <UButton
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/alexander-b%C3%B6sch-12b891129/"
        target="_blank"
        icon="i-devicon-linkedin"
        :label="$t('social.linkedin.label')"
        />

      <UButton
        color="neutral"
        variant="ghost"
        to="mailto:call@sirthxalot.com"
        target="_blank"
        icon="i-material-symbols-light-mail-outline-sharp"
        label="call@sirthxalot.com"
      />

      <LanguageSelect />
    </nav>
</template>
