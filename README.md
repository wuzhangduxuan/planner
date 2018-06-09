# 规划师
> 没时间了，赶紧写。


登录
```
url:/login
Content-Type:application/json
params:
{"perUser":"zhang.wu","perPass":"0204376745"}


返回数据:
{"code":0,"message":"登录成功"}
{"code":-2,"message":"登录失败"}
```

未登录状态访问其它接口
```
{"code":-3,"message":"暂未登录，无权限访问接口"}
```

新增规划
```
url:/task/new
Content-Type:application/json
param:
//参数说明：第一个子阶段的开始时间+消耗时间需要小于下一个阶段,时间单位毫秒
{
	"taskName": "学习java",
	"startTime": "2018-02-23 10:00:00",
	"timeConsume": "360000",    //总消耗时间
	"taskList": [{      //子阶段
		"taskName": "java基础",
		"startTime": "2018-02-23 11:00:00",
		"timeConsume": "36000", //消耗时间，单位毫秒
		"stageLevel": "1"   //需要存在阶段号
	}]
}
返回结果:
{"code":0,"message":"新增任务成功"}
{"code":-2,"message":"新增任务失败"}
```

删除规划
```
url:/task/del
taskId:
返回结果:
{"code":0,"message":"删除任务编号成功"}
{"code":-2,"message":"删除任务编号失败，可能不存在该任务编号"}
```
新增账户
```
url:/person/add
param:
{
	"perUser": "zhang.wu",
	"perPass": "0204376745",
	"perName": "木章", //用户名
	"perComment": "顺其自然" //用户签名
}
返回数据:
{"code":0,"message":"创建用户成功"}
{"code":-2,"message":"账户已经存在,请重新填"}
```

规划表查询
```
url:/task/select
params:
返回数据:
{
	"code": -2,
	"message": "暂无规划表"
}
{
	"code": 0,
	"message": [{
		"taskId": 16,
		"perId": 3,
		"taskName": "学习java",
		"stageLevel": null,
		"startTime": "2018-02-23 10:00:00",
		"timeConsume": 7200000,
		"parentId": null,
		"state": 1
	}]
}
```

规划详情查询
```
state说明:

    INIT(-2),   //初始状态
    RUNNING(0), //运行状态
    TIMEOUT(1), //超时状态，用户在时间区间内未完成任务
    END(2); //结束状态,用户主动完成任务

url:/task/${taskId}
返回数据:
{
	"code": -2,
	"message": "暂无规划表"
}

{
	"code": 0,
	"message": {
		"taskId": null,
		"perId": 16,
		"taskName": "学习java",
		"stageLevel": null,
		"startTime": "2018-02-23 10:00:00",
		"timeConsume": 7200000,
		"parentId": null,
		"state": 1,
		"taskList": [{
			"taskId": 17,
			"perId": 3,
			"taskName": "java基础",
			"stageLevel": 1,
			"startTime": "2018-02-23 11:00:00",
			"timeConsume": 36000,
			"parentId": 16,
			"state": -2
		}]
	}
}
```

结束任务
```
url:/task/end/${taskId}
返回数据;
{
	"code": 0,
	"message": "更新任务状态成功"
}

{
	"code": -2,
	"message": "暂不存在该任务"
}
```
个人信息
```
url:/info
返回数据;
{
	"code": 0,
	"message": {
		"perId": 3,
		"perUser": "zhang.wu",
		"perPass": "0204376745",
		"perName": "hello",//昵称
		"perComment": "hello"//个人签名
	}
}

```

登出
```
url:/logout
返回数据;
{
	"code": 0,
	"message": "登出成功"
}

{"code":-3,"message":"暂未登录，无权限访问接口"}

```
任务进度条
```
url:/task/progress/{taskId}
返回数据;
{
	"code": 0,
	"message": {
		"state": 2//完成  -2//初始化  
	}
}

{
	"code": 0,
	"message": {
		"state": 0, //运行中
		"progress": "97.08" //进度
	}
}

```

