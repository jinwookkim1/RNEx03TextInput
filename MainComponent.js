
import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text, Alert, Button} from 'react-native';

//다른 문서에서 사용할 것이므로 class를 선언하면서 곧바로 export까지..
export default class MainComponent extends Component{

    //2)실습에 사용하는 state 멤버변수선언
    //생성자 : MainComponent클래스가 만들어질 때 자동으로 실행되는 메소드
    constructor(){
        //상속받았을때는 반드시 부모 클래스의 생성자를 호출하는 super()호출이 있어야함. [ 생략하면 ERROR ]
        super();
        //state 객체를 통해 멤버변수선언
        this.state= {
            text: "Hello",
        };
        
        //4)실습에서 사용하는 일반 멤버변수: 이 변수값이 변해도 화면은 자동 갱신되지 않음
        this.inputValue="";
    }

    render(){

        return (

            //1) 글씨를 입력받을 수 있는 기본적인 TextInput 사용 
            //View를 여러개 놓기 위해 일단 ViewGroup의 역할을 수행하는 View컴포넌트 추가(웹에서는 <div>같은 역할)
            //모든 react-native의 컴포넌트들을 사용할 때는 import해야함
            // <View style={style.root}>                
            //     {/* 아무 속성이 없으면 화면에서 영역도 인지할 수 없어서 스타일링 */}
            //     {/* 기본적으로는 한줄입력 - 애뮬레이터에서 테스트할 때는 엔터키로 submit키보드 역할 됨*/}
            //     <TextInput style={style.textInput}></TextInput>
            // </View>


            //2) TextInput컴포넌트를 이용하여 입력한 글씨를 Text컴포넌트에 보이기
            // 방법이 기존과 많이 다름.. -- 컴포넌트객체를 참조하여 제어하는 방식이 아닌...binding방식으로 데이터를 보여줌.
            // 버튼에 onPress속성을 지정하여 사용하듯이 onChangeText속성에 실행할 함수를 지정하여 글씨가 변경되는 것에 반응하기
            // <View style={style.root}>   
            //     <TextInput style={style.textInput} onChangeText={ this.changeText }></TextInput>
            //     {/* Text컴포넌트가 보여줄 내용물이 고정된 글씨가 아니라 바뀌게 되는 값이어서 변수로 글씨 설정 : 버튼예제에서 해봤듯이 컴포넌트가 보여줄 값은 state객체를 이용하기.*/}
            //     {/* state의 값이 변경되면 자동 render()메소드가 다시 실행되어 자연스럽게 갱신됨 */}
            //     <Text style={style.plainText}> {this.state.text} </Text>
            // </View>


            //3) TextInput컴포넌트에 글씨를 변경할 때마다 Text컴포넌트를 변경하지 말고 TextInput작성을 완료(submit)하면 변경하기
            // onSubmitEditing속성 사용..[완료:submit]키를 눌렀을 때 실행.
            // <View style={style.root}>   
            //     <TextInput style={style.textInput} onSubmitEditing={ this.submitText }></TextInput>
            //     {/* Text컴포넌트가 보여줄 내용물이 고정된 글씨가 아니라 바뀌게 되는 값이어서 변수로 글씨 설정 : 버튼예제에서 해봤듯이 컴포넌트가 보여줄 값은 state객체를 이용하기.*/}
            //     {/* state의 값이 변경되면 자동 render()메소드가 다시 실행되어 자연스럽게 갱신됨 */}
            //     <Text style={style.plainText}> {this.state.text} </Text>
            // </View>


            //4)버튼 클릭했을 때 TextInput의 값 얻어와서 Text컴포넌트에 보여주기
            // 네이티브앱개발 방식을 버릴것!!
            // TextInput에 글씨가 변경될때마다 변수에 값을 저장하고..버튼을 클릭할 때 Text컴포넌트가 보여주는 state에 값 설정!!!
            // 즉, Text컴포넌트가 보여주는 멤버변수와 TextInput컴포넌트가 수정할 멤버변수를 다른 변수로 사용
            // <View style={style.root}>   
            //     <TextInput style={style.textInput} onChangeText= { this.changeText2 }></TextInput>               
            //     <Text style={style.plainText}> {this.state.text} </Text>
            //     {/* import잊지 말것 */}
            //     <Button title="button" onPress={this.btnClick } ></Button>
            // </View>
            // RN에서 권장하는 방식은 아님. 참고만 하도록.

            // 5) 여러줄 입력 : TextInput은 기본 한줄 입력임.
            <View style={style.root} >   
                {/* multiline속성은 boolean값을 원하므로 반드시 JS로 값을 주어야함 */}
                <TextInput multiline={true} numberOfLines={4} style={style.textInput2} onChangeText={ this.changeText2 }></TextInput>               
                <Text style={style.plainText}> {this.state.text} </Text>
                {/* import잊지 말것 */}
                <Button title="button" onPress={this.btnClick } ></Button>
            </View>
        );

    }

    //2)실습 onChangeText속성에 의해 실행될 멤버메소드[ this키워드로 state변수를 사용하려면 화살표함수로...일반함수를 사용하려면 bind()써야함.--Ex02ButtonEvnet예제에서 소개..] 
    // changeText=()=>{ 
    //     Alert.alert('change TEXT'); //호출되는 것 확인.     
    // }
    // 참고로 Alert을 change될때마다 띄우기 때문에 앱을 다시 실행시키는 'RR'키보드를 누를 때마다 다이얼로그가 띄워져서 리로드가 번거로우니...
    // ctrl+M(WindowsOS)/cmd+M(MacOS)를 눌러 디버그 메뉴를 통해 리로드하면 수월함.

    //TextInput의 글씨가 변경될 때마다 Text가 보여주는 값 this.state.text를 변경하기
    //사실 onChangeText속성은 설정한 함수를 실행할때 파라미터(매개변수)로 변경되고 있는 글씨를 전달해줌.. 이를 받으려면 파라미터에 변수 선언
    changeText=(value)=>{ 
        //이 메소드가 호출될때 마다 전달받는 TextInput에 써있는 글씨(value)를 setState()메소드를 통해 Text컴포넌트가 보여주는 값 변수 this.state.text에 값 대입                
        this.setState({text: value});        
        //state객체의 상태값이 변경될 때 마다 자동 render()메소드가 다시 실행되어 화면이 갱신됨!! 
        
        ////주의!!!!!
        //this.state.text= value; //이렇게 값을 넣으면 값은 대입되지만 state가 갱신되었다는 것을 Component가 인지하지 못해 화면이 자동 갱신되지 않음.
    }


    //3)실습에서 사용하는 메소드
    // onSubmitEdting속성에 설정된 메소드... [완료:submit]키를 눌렀을 때 실행
    submitText=(submitEvent)=>{
        //전달되어온 파라미터가 다름. changeText와 달리 변경된 값이오는 것이 아니라.. submit이벤트 객체가 옴.
        //그래서 이 이벤트 객체로 부터 값을 얻어와야함.        
        let value= submitEvent.nativeEvent.text;
        this.setState( {text: value} );
    }


    //4)실습에서 사용하는 메소드
    //4.1) TextInput에 값이 변경될 때마다 그 값 저장하기
    changeText2=(value)=>{
        this.inputValue= value; //멤버변수에 변경된 값 대입
    }

    //4.2)버튼을 클릭하였을 때 콜백함수
    btnClick= ()=>{
        //위 4.1)에서 저장한 입력값을 TextView가 보여주는 state객체에 설정하기
        //[반드시 setState()이용 : 자동 rendering]
        this.setState(  {text:this.inputValue} );        
    }


}


//스타일객체
const style= StyleSheet.create({
    root:{
        //backgroundColor:'lightgreen',
        flex : 1,
        padding : 16,
    },
    textInput:{
        //1)기본적인 TextInput사용 스타일링
        borderWidth: 2,        
        backgroundColor:'white',
        borderColor: 'green',
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 16,
        height: 40,        
    },

    //2)실습에 사용하는 스타일
    plainText:{
        marginTop: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    },

    //5)실습에 사용하는 스타일
    textInput2:{
        //1)기본적인 TextInput사용 스타일링
        borderWidth: 2,        
        backgroundColor:'white',
        borderColor: 'green',
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 16,

        // 엔터를 통해 TextInput의 높이가 자동으로 커지므로 최대높이 사이즈 지정하여 더 이상 커지지 않고 스크롤되도록..
        maxHeight: 200, 
    },
});