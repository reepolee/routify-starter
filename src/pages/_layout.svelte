<script>
  import Footer from "../components/Footer.svelte";
  import TwitterIcon from "../components/TwitterIcon.svelte";
  import GithubIcon from "../components/GithubIcon.svelte";
</script>

<div class="flex flex-col min-h-screen text-gray-900 bg-gray-100">
  <div class="flex-grow grid place-content-center">
    <slot />
  </div>
  <Footer>
    <a href="https://github.com/reepolee" alt="Reepolee on GitHub"><GithubIcon /></a>
    <a href="https://www.reepolee.com" alt="Reepolee Web Site"><img src="/images/reepolee.svg" alt="Reepolee web site" class="h-6" /></a>
    <a href="https://twitter.com/alesvaupotic" alt="Aleš Vaupotič on Twitter"><TwitterIcon /></a>
  </Footer>
</div>
