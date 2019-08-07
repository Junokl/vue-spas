<template>
	<div data-reactroot="" class="tab-page">
		<XtopBar status="user" />
        <div class="topbox">
            <div class="titletop">
                <div class="topleft">客户概览</div>
                <div class="topright">
                    <div class="tabitem " v-for="(item,index) in tabitem" :key="index" @click="changeTab(index)"  :class="{on:tab==index}" v-text="item.name">
                        <!-- {{item.name}} -->
                    </div>
                </div>
            </div>
            <div class="titlebottom">
                <div class="bottomleft">
                    <div class="bottomdsc">客户数</div>
                    <div class="bottomdsc">12</div>
                </div>
                <div class="bottomright">
                    <div class="bottomdsc">营业额</div>
                    <div class="bottomdsc">2850</div>
                </div>
            </div>
        </div>
        <div class="userItem">
            <div class="items" style="border-bottom:1px solid rgba(187, 187, 187, 1);">
                <div class="username">用户</div>
                <div class="usernub">到店次数</div>
                <div class="time">最后一次</div>
            </div>
            <div class="items" v-for="(item,index) in tableData" :key="index">
                <div class="username">{{item.user}}</div>
                <div class="usernub">{{item.number}}</div>
                <div class="time">{{item.time}}</div>
            </div>
        </div>
	</div>
</template>
<script>
import XtopBar from "../../components/Register/XtopBar.vue";
export default {
  components: {
    XtopBar
  },
  data() {
    return {
      tab: 0,
      tabitem: [
        { id: 0, name: "今日" },
        { id: 1, name: "昨日" },
        { id: 2, name: "本周" },
        { id: 3, name: "本月" }
      ],
      tableData: [
        {
          user: "张小姐(会员)",
          number: "26",
          time: "2019-8-4 18：33"
        },
        {
          user: "张小姐(会员)",
          number: "24",
          time: "2019-8-4 18：33"
        },
        {
          user: "张小姐",
          number: "22",
          time: "2019-8-4 18：33"
        },
        {
          user: "张小姐",
          number: "18",
          time: "2019-8-4 18：33"
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: ""
    };
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
    //   this.$router.push({
    //     name: this.tabs[tab].path
    //   });
    },
    handleChange(value) {
      console.log(value);
    },
    getData() {
      console.log(this.data);
    }
  },
  computed: {},
  updated() {
    this.getData();
    console.log(this.props);
  }
};
</script>
<style>
.topbox {
  width: 90%;
  margin: 10px auto 0;
}
.titletop {
  height: 55px;
  line-height: 40px;
}
.tabitem {
  float: left;
  border: 1px solid #333;
  padding: 0 5px;
  /* margin-left: 1px; */
}
.on {
  color: #1890ff;
  border: 1px solid #1890ff;
}
.topleft {
  float: left;
}
.topright {
  /* border: 1px solid #333; */
  /* border-radius: 2px; */
  float: right;
}
/* .tabitem:nth-child(1),.tabitem:nth-child(2),.tabitem:nth-child(3){
    border-right: none;
} */
.tabitem:nth-child(2),.tabitem:nth-child(3),.tabitem:nth-child(4){
    border-left:none;
}
.titlebottom {
  display: flex;
}
.bottomleft {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #333;
  text-align: center;
}

.bottomright {
  flex: 1;
  text-align: center;
}

.userItem {
  width: 90%;
  margin: 20px auto 0;
}
.items {
  display: flex;
  margin: 20px 0 0 0;
}
.username {
  flex: 2;
}
.usernub {
  flex: 1;
}
.time {
  flex: 2;
}
/*  */
</style>
