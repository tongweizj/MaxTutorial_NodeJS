var pet = {
	words:'...',
	speak:function(say){
		console.log(say+ ' '+this.words);
		console.log(this);
	}
}
var dog ={
	words:'Wang'
}

// pet.speak 调用这个函数
// 但是 speak 里的变量 this.words ,要使用 dog 的 名字相同的变量
pet.speak.call(dog,'Speak111111');

/// https://juejin.cn/post/6844903620660428814