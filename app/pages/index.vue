<script setup lang="ts">

</script>

<template>
<div>
    <ElIndexHero />
    <section id="logos" class="my-16 flex flex-col gap-16 pb-16 border-b">
        <h3 class="text-center text-2xl font-light uppercase">{{ $t('logos.intro') }}</h3>
        <UContainer>
            <UMarquee pause-on-hover>
                <UTooltip text="HTML5">
                    <UIcon name="i-simple-icons-html5" class="size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="JavaScript, TypeScript, ECMAScript or Node.js">
                    <UIcon name="i-simple-icons-nodedotjs" class="size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="Vue.js">
                    <UIcon name="i-simple-icons-vuedotjs" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="Docker (VM)">
                    <UIcon name="i-simple-icons-docker" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="GIT or SVN">
                    <UIcon name="i-simple-icons-git" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="NGINX or Apache">
                    <UIcon name="i-simple-icons-nginx" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="PHP 5.4+">
                    <UIcon name="i-simple-icons-php" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="MySQL or MariaDB">
                    <UIcon name="i-simple-icons-mariadb" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="Symfony PHP Framework">
                    <UIcon name="i-simple-icons-symfony" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="Laravel PHP Framework">
                    <UIcon name="i-simple-icons-laravel" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="WordPress CMS">
                    <UIcon name="i-simple-icons-wordpress" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="TYPO3 CMS and TypoScript">
                    <UIcon name="i-simple-icons-typo3" class="size-10 shrink-0" />
                </UTooltip>
                <UTooltip text="Shopware 5+">
                    <UIcon name="i-simple-icons-shopware" class="size-10 shrink-0" />
                </UTooltip>
            </UMarquee>

            <UMarquee class="mt-16" reverse pause-on-hover>
                <UTooltip text="Microsoft Office">
                    <UIcon name="i-mdi-microsoft-office" class="size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="Atlassian Jira">
                    <UIcon name="i-mdi-jira" class="size-10 shrink-0" />
                </UTooltip>


                <UTooltip text="Visual Studio Code">
                    <UIcon name="i-hugeicons-visual-studio-code" class="size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="JetBrains PHPStorm">
                    <UIcon name="i-devicon-plain-phpstorm" class="size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="Google Developers">
                    <UIcon name="i-logos-google-developers" class="grayscale size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="GitHub">
                    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="GitLab">
                    <UIcon name="i-simple-icons-gitlab" class="size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="BitBucket">
                    <UIcon name="i-simple-icons-bitbucket" class="size-10 shrink-0" />
                </UTooltip>

                <UTooltip text="Adobe PDF + Master Collection CS 5-6">
                    <UIcon name="i-simple-icons-adobe" class="size-10 shrink-0" />
                </UTooltip>

            </UMarquee>
        </UContainer>
    </section>
    <section id="offer" class="hidden my-16 flex flex-col gap-16 pb-16 border-b">
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                    <UCard>
                        <template #header>
                            <span class="uppercase font-bold">{{ $t('offer.1.title') }}</span>
                        </template>
                        <p>{{ $t('offer.1.description') }}</p>
                    </UCard>
                </div>
                <div>
                    <UCard>
                        <template #header>
                            <span class="uppercase font-bold">{{ $t('offer.2.title') }}</span>
                        </template>
                        <p>{{ $t('offer.2.description') }}</p>
                    </UCard>
                </div>
                <div>
                    <UCard>
                        <template #header>
                            <span class="uppercase font-bold">{{ $t('offer.3.title') }}</span>
                        </template>
                        <p>{{ $t('offer.3.description') }}</p>
                    </UCard>
                </div>
            </div>
        </UContainer>
    </section>
    <section>
        <UContainer>
            <a href="https://github.com/sirthxalot" target="_blank">
                <UPageCard
                    :title="$t('visit.github')"
                />
            </a>
        </UContainer>
    </section>
    <NuxtCookieConsentPolicy />
</div>
</template>
