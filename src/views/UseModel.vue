<template>
  <ContentCard>
    <img src="../imgs/sample_video.gif" class="img-fluid rounded mx-auto d-block" alt="HPE example">
    <input type="file" @change="handleFileUpload" accept="video/*" />
    <button @click="uploadFile" class="btn btn-info" >上传</button>
  </ContentCard>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'

export default {
  name: 'UseModel',
  data(){
    return {
      file: null,  // 存储的视频文件
    };
  },
  methods: {
    // 用户选择文件时触发
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    // 点击按钮时上传文件 
    async uploadFile() {
      if (!this.file) {
        alert("请选择视频文件");
        return;
      }
      const formData = new FormData();
      formData.append("video", this.file);

      try {
        // 向后端发送POST请求
        const response = await fetch("http://localhost:3000/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("upload fail");
        }

      } catch(error) {
        console.error("upload failed", error);
        alert("上传视频失败");
      }

    },
  },
  components: {
    ContentCard,
  }
}
</script>
