<template>
  <!-- flex container der alle Elemente untereinanter (in einer Spalte) ausrichtet -->
  <div class="flex flex-col gap-10">
    <h1>Aktuelle Projekte</h1>

    <!--eigentliche Project Card, wiederum eine flex box-->
    <div class="bg-slr-blue-box text-white lg:w-10/12 flex flex-col mx-auto md:flex-row rounded-[24px]"> <!-- //content-box-->
      <!--container für den Text, Ausrichtung row + Breite 2/3 ab mittel-großen Bildschirmen-->
      <div class="px-8 md:w-3/5 pt-4">
        <h3>Kiribati, Malediven</h3>
        <p class="pb-4">
          Noch sind sie nicht anerkannt, die sogenannten Klimaflüchtlinge. Ein
          Mann aus dem bedrohten Kiribati wollte 2013 der erste Klimaflüchtling
          nach den Vorgaben der UN-Flüchtlingskonvention werden. Sein Asylantrag
          in Neuseeland wurde abgelehnt. Doch was passiert, wenn es ganze
          Inselstaaten wegen des steigenden Meeresspiegels bald nicht mehr gibt?
          In diesem Projekt wollen wir die Küstenbefestigung der Insel Kiribati
          durch Landaufschüttung und Steinmauern verbessern. Somit können wir
          einen großen Teil zur Rettung der Inseln beitragen.
        </p>
        <!--flex box für Spendenziel und Betrag-->
        <div class="flex flex-row justify-between font-bold text-lg md:text-xl pb-4">
          <div class="font-bold">Spendenziel:</div>
          <div>10.000X</div>
        </div>
      </div>
      <!--container für Projekt Bild-->
      <div class="order-first md:order-last md:w-2/5">
        <img
          class="object-cover w-auto h-full rounded-t-[24px] md:rounded-r-[24px]"
          src="../assets/images/kiribati.jpg"
          alt="project-image"
        />
      </div>

    </div>


    <div v-for="(project, i) in projectInfos" :key="i">
      <!-- Render all project properties -->
      <h2 >{{ project.name }}</h2>
      <p>State: {{ project.state }}</p>
      <p>Amount: {{ project.amount }}</p>
      <p>Start: {{ new Date(parseInt(project.startDate * 1000)) }}</p>
      <p>End: {{ new Date(parseInt(project.endDate * 1000)) }}</p>
    </div>
  </div>

  
</template>

<script>
import Web3 from 'web3'
// import abi for contracts
import AddProjectJson from '../abi/AddProject.json'

export default {
  name: 'Projects',

  data() {
    return {
      AddProjectAddr: '0x8Ddc6229042343680a1B85F058f7D2cE74f1E67e',
      projectInfos: [],
    }
  },

  created() {
    this.getProjectInformation();
  },

  methods: {
    
    getProjectInformation: async function() {
      // methode for getting infos of all the projects currently saved on the blockchain
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(AddProjectJson.abi, this.AddProjectAddr);
      // get the number of projects to iterate over every project in the next step
      const numberOfProjects = await contract.methods.getNumberOfProjects().call();

      this.projectInfos = [];
      for(let i=0; i<numberOfProjects; i++){
        this.projectInfos.push(await contract.methods.getProjectDetails(i).call());
      }
    },
  },
}


</script>
