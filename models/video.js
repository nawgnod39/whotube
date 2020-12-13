import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Tilte is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
    //처음 video가 생성되면 views 를 0이 되게 함.
  },
  createdAt: {
    type: Date,
    default: Date.now//현재날짜 반환 함수
    //내가 document를 저장할때 마다 해당 function을 실행해서 현재 날짜를 받음.
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Video", VideoSchema);//스키마를 이용해 model을 만들어보면  definition을 통해 실제 document를 만드는 것이고 스키마가 데피니션 같은것임.
export default model;