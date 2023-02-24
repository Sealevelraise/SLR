<template>
  <div>
    <div
      class="md:w-3/4 mx-auto mt-12 bg-slr-blue-box py-12 px-8 md:px-32 rounded-[24px] text-white"
    >
      <h2 class="text-2xl text-center pb-12">Was ist eine DAO?</h2>
      <div class="text-justify">
        <p class="p-2">
          Eine DAO (dezentralisierte autonome Organisation) ist ein auf der
          Blockchain-Technologie basierendes System, das es Organisationen
          ermöglicht, sich selbst zu regieren. Die dezentrale Verwaltung beruht
          auf einer Reihe von sich selbst ausführenden Regeln, die auf einer
          öffentlichen Blockchain bereitgestellt sind und dezentral verwaltet
          werden.
        </p>
        <p class="p-2">
          Durch dieses Prinzip ist es möglich SeaLevelR(a)ise ohne ein zentrales
          Verwaltungsorgan zu funktionieren und sich selbst zu steuern.
        </p>
        <p class="p-2">
          Während darüber gestritten wird, ob mit Bitcoin die erste erfolgreiche
          DAO geschaffen wurde, wird über potentielle Anwendungsbereiche
          außerhalb des Bereichs der Kryptowährungen diskutiert. Eine DAO im
          Zusammenspiel mit Smart Contracts (zu deutsch “intelligente Verträge”)
          ermöglicht es Organisationen wie SLR auf ein zentrales
          Verwaltungsorgan zu verzichten und somit einen hohen Grad an
          Transparenz und Vertrauenswürdigkeit zu erlangen.
        </p>
      </div>
    </div>
    <h1 class="text-2xl text-center p-12 underline solid balck">
      Abgeschlossene Projekte
    </h1>
    <h2 class="text-2xl text-center p-4">Gewinner der letzten Wahl<br />#1</h2>
    <div
      class="bg-slr-blue-box text-white md:w-10/12 flex flex-col mx-auto md:flex-row rounded-[24px]"
    >
      <!-- //content-box-->
      <div class="px-8 md:w-3/5 pt-4">
        <h3>HTW - Verschönerungsfond</h3>
        <p class="pb-4"></p>
        <p class="pb-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div
          class="flex flex-row justify-between font-bold text-lg md:text-xl pb-4"
        >
          <div class="font-bold">Spendenziel: 10.000.000€</div>
        </div>
      </div>
      <div class="order-first md:order-last md:w-2/5">
        <img
          class="object-cover w-auto h-full rounded-t-[24px] md:rounded-r-[24px]"
          src="../assets/images/HTW_campus.jpg"
          alt="project-image"
        />
      </div>
    </div>
    <p class="p-6"></p>
    <h2 class="text-2xl text-center p-4">
      Projekte der letzten Auswahl<br />(Verlierer)
    </h2>
    <div
      class="bg-slr-blue-box text-white md:w-10/12 flex flex-col mx-auto md:flex-row rounded-[24px]"
    >
      <!-- //content-box-->
      <div class="px-8 md:w-3/5 pt-4">
        <h3>HTW - Verschönerungsfond</h3>
        <p class="pb-4"></p>
        <p class="pb-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div
          class="flex flex-row justify-between font-bold text-lg md:text-xl pb-4"
        >
          <div class="font-bold">Spendenziel: 10.000.000€</div>
        </div>
      </div>
      <div class="order-first md:order-last md:w-2/5">
        <img
          class="object-cover w-auto h-full rounded-t-[24px] md:rounded-r-[24px]"
          src="../assets/images/HTW_treskow.jpg"
          alt="project-image"
        />
      </div>
    </div>
    <p class="p-6"></p>
  </div>
</template>

<script>
export default {
  name: 'default',
}
</script>
