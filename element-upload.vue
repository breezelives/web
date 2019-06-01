<template>
  <div id="app">
    <el-upload
      class="file-list"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :file-list="fileList"
      :on-success="onSuccess"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [
        {
          sort: 1,
          url: "https://picsum.photos/500/300?image=15"
        },
        {
          sort: 2,
          url: "https://picsum.photos/500/300?image=20"
        },
        {
          sort: 3,
          url: "https://picsum.photos/500/300?image=25"
        },
        {
          sort: 4,
          url: "https://picsum.photos/500/300?image=30"
        },
        {
          sort: 5,
          url: "https://picsum.photos/500/300?image=35"
        }
      ]
    };
  },
  mounted() {
    this.drag();
  },
  methods: {
    onSuccess() {},
    // 使用sort值排序
    sort() {
      this.fileList = this.fileList.sort((a, b) => a.sort - b.sort);
    },
    drag() {
      let listItems = document.querySelectorAll(".file-list ul li");
      let start;
      listItems.forEach((item, i) => {
        item.setAttribute("draggable", true);
        // dom中保存图片uid
        item.setAttribute("data-uid", this.fileList[i].uid);
        item.addEventListener("dragstart", e => {
          // 保存拖动的元素
          start = this.fileList.find(v => v.uid == e.target.dataset.uid);
        });
        item.addEventListener("dragover", e => e.preventDefault());
        item.addEventListener("drop", e => {
          // 查找目标元素
          let end = this.fileList.find(
            v => v.uid == e.target.parentElement.dataset.uid
          );
          // 交换拖动的两个元素的sort
          let temp = start.sort;
          start.sort = end.sort;
          end.sort = temp;
          this.sort();
        });
      });
    },
    handleRemove(file, fileList) {
      this.fileList.splice(this.fileList.findIndex(v => v.uid == file.uid), 1);
      window.console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

