<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      students: [],
      newmark: "",
      newgroup: "",
      newisDonePr: "",
      newname: "",
      search: "",
      priece: "",
      editStudentInput: "",
      editStudentId: "",
      student: { pib: "", zdav: false, group: "" },
    };
  },
  mounted: function () {
    this.axios.get(`http://34.82.81.113:3000/students`).then((response) => {
      console.log(response.data);
      this.students = response.data;
    });
    //this.students = stud;
  },
};
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Student name</th>
          <th scope="col" class="px-6 py-3">PR</th>
          <th scope="col" class="px-6 py-3">Group</th>
          <th scope="col" class="px-6 py-3">Delete</th>
          <th scope="col" class="px-6 py-3">Rewrite</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in students"
          v-bind:key="item._id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td>{{ item.name }}</td>
          <td><input type="checkbox" v-model="item.isDonePr" /></td>
          <td>{{ item.group }}</td>
          <td><a href="#" @click="deleteStudent(item._id)">Видалити</a></td>
          <td>
            <a href="#" @click="putToEdit(index)"
              ><img
                src="https://img.icons8.com/material-outlined/24/null/pencil-tip.png"
            /></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
