<template>
  <div class="flex flex-col gap-10">
    <h1 class="">Aktuelle Projekte</h1>
    <div class="bg-slr-blue-box flex content-box">
      <div class="px-8 w-2/3 pt-4">
        <h3>Kiribati, Malediven</h3>
        <p class="pb-4">
        </p>
        <div class="flex justify-between pb-4">
          <div class="font-bold">Spendenziel:</div>
          <div>10.000X</div>
        </div>
      </div>
      <div class="w-1/3 rounded-[24px]">
        <img
          class="object-cover w-auto h-full rounded-[24px]"
          src="../assets/images/kiribati.jpg"
          alt="project-image"
        />
      </div>
    </div>
    <span v-for="(project, i) in projectInfos" :key="i">
      <!-- Render all project properties -->
      <h2 >{{ project.name }}</h2>
      <p>State: {{ project.state }}</p>
      <p>State: {{ project.description }}</p>
      <p>Amount: {{ project.amount }}</p>
      <p>Start: {{ new Date(parseInt(project.startDate * 1000)) }}</p>
      <p>End: {{ new Date(parseInt(project.endDate * 1000)) }}</p>
    </span>
  </div>
</template>

<script>
import Web3 from 'web3'
// import abi for contracts
import AddProjectJson from '../../truffle-project/build/contracts/AddProject.json'

export default {
  name: 'Projects',

  data() {
    return {
      AddProjectAddr: AddProjectJson.networks[5777].address,
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
