<template>
  <nav class="hidden lg:flex gap-2 items-center">

    <UTooltip :text="$t('color.button.text')">
        <div><UColorModeButton /></div>
    </UTooltip>
    <UTooltip :text="$t('github.text')">
        <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/sirthxalot"
        target="_blank"
        icon="i-simple-icons-github"
        :aria-label="'GitHub Profile '+$t('name')"
        />
      </UTooltip>
             <UTooltip :text="$t('social.linkedin.label')">
        <UButton
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/alexander-b%C3%B6sch-12b891129/"
        target="_blank"
        icon="i-devicon-linkedin"
        aria-label="LinkedIn Profile"
        />
      </UTooltip>
       <UTooltip :text="$t('mail.section.description')+' alexander.boesch.ch@gmail.com'">
        <UButton
        color="neutral"
        variant="ghost"
        to="mailto:alexander.boesch.ch@gmail.com"
        target="_blank"
        icon="i-material-symbols-light-mail-outline-sharp"
        aria-label="E-Mail"
        />
      </UTooltip>
      <UTooltip :text="$t('i18n.lang.select.text')">
        <div><LanguageSelect /></div>
      </UTooltip>
  </nav>
</template>
