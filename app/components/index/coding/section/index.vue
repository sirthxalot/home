<template>
    <div class="py-18 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <UContainer>
            <div class="grid grid-cols-3">
                <div class="col-span-3 lg:col-span-1 flex flex-col gap-12 bg-black border-black dark:bg-gray-900 dark:border dark:border-white text-white p-8">
                    <div>
                        <h2 class="heading text-3xl mb-3" v-html="$t('coding.title')" />
                        <p class="text-xl" v-html="$t('coding.description')" />
                    </div>
                    <div>
                        <h2 class="heading text-xl mb-12" v-html="$t('coding.github.title')" />
                        <a href="https://github.com/sirthxalot" target="_blank" class="flex flex-col gap-6 text-center">
                            <UIcon name="i-simple-icons-github" class="size-16 mx-auto" />
                            <span>https://github.com/sirthxalot</span>
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block col-span-2 bg-blue-950 flex flex-col">
<pre class="text-[9px] text-white m-auto">
                               o$o
                           $  "o        o$o
            o              $    "o     o" "o   o
            "$$"""ooooo    $      "o  o"   "o $ $  $
              "$oo    ""$o $        "o"     "o" "o $      oo
                 """oo   ""$o        ""      "   "o$o oo""  $
                     "$oo   "                   $"" ""   ooo$
             ooooooooo    oooooo""""           $   o       """"oo
    """""""""        ""                        $   $$  $  "ooo  $
            o                          """oo  $   o" $o"$   $ ""
    oooooo$"$""""""                    ooo   o"   $     "ooo"
            $                             " o$   $
            $                         ooo$$$$"  o"""o
            $          ooooooo  ooo$$$"""o$"$   $   $
            "o      oo$"ooooo$$$"""   oooo o"  o"   $
            o$o"""$o$$$"""$$$$$      o"   """""$oo$"
           $oo$$$"$$"$$   $$$$$      $oo           "$"
           $$$$$  $$o$$$$$$$$"      $   """"oooo   o"
            $$$$$$$"   """""  oo    $o          ""$
             "$"" $            $   $  """oo      $
              $   ""ooo""     o"  o""oo    """oo"
              $            oo"    $    """oo  o"
    oooooo    $       """""      ""oo       $"
o"""     ""o   $oo       ooooo"""    """oo  $
$oo"" o"   "o     "$$$"""     """ooo      $"
o"   $   $  "o   o"o  """oooo       ""oo  $
$   $$  o"o  "o $ $          """ooo     "$
 """  ""  $    ""o$                """"oo"
           $   o $"""""""""""ooooooo    $
            "o" o"                 ""$o$
                $""""""""""$oooo       $
                $              """$oo  $
                $"""""""oooooooooo  """$
                $                 """oo$
                $""""""""""""""""oooo  $
                 $   oooooooooooo    "o $
                 $"""oooooooooooo""""oo$$oo
                  o$$$$$$$$$$$$$$$$$$o$$$$$o$""$o
                  $$$$$$$$$$$$$$$$$$$$$$$$$$o   $
                   "$$$$$$$$$$$$$$$$$$$$$$" o"  $
                      "$$$$$$$$$$$$$$$$$$"o"  o$
                       $"ooooo"""$"oooooo"   ""
                        $       $          $
                         $o      $o      o"
          $$$$$$$$$$$$$$$$"$ooo$"" "ooo""$$$$$$$$$$$$$$$$$$$$$$$$$$"
</pre>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
</script>
