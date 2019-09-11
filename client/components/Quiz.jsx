import React from 'react'

var test = {
    name: "Sample Test",
    description: "This is a sample test paper to demonstrate the ReactJS UI design by components.",
    passCutoff: 0.33,		
    applyNegativeMarking: false,
    questions: [
        {
        id: "1",
        qtext:"California is in which part of USA?",
        options:[
            {text:"East"},
            {text:"Mid"},
            {text:"West"},
            {text:"South"}
        ],
        ans:"West",
        marks: 3
    },
    {
        id: "2",
        qtext:"Who is Prime Minister of India?",
        options:[
            {text:"Sonia Gandhi"},
            {text:"Narendra Modi"},
            {text:"Manmohan Singh"},
            {text:"Rahul Gandhi"}
        ],
        ans:"Narendra Modi",
        marks: 2
    },
    {
        id: "3",
        qtext:"Which of the following is most popular Search Engine Company?",
        options:[
            {text:"Microsoft"},
            {text:"Facebook"},
            {text:"Google"},
            {text:"Yahoo"}
        ],
        ans:"Google",
        marks: 1
    },
    ]
};	
//test 
var Test = React.createClass({
    getInitialState: function() {
        return {totalscore : 0, testSubmitted: false};
    },
    handleChange: function(result) {
        this.setState({totalscore: result.totalscore, testSubmitted: true});
    },
    render: function(){						
        var totalmarks = 0;
        this.props.details.questions.map(function(question){
            totalmarks += question.marks;
        });
        return(
            <div>					
                <h1>{this.props.details.name}</h1>
                <hr className="divider"/>
                <div>{this.props.details.description}</div>
                <table className="table">
                    <tr>
                        <td className="col-md-9">
                        <QuestionPaper questions={this.props.details.questions} applyNegativeMarking={this.props.details.applyNegativeMarking}
                         onSubmitted={this.handleChange}/>
                         </td>
                         <td className="col-md-3">
                        <Scorecard score={this.state.totalscore} testSubmitted={this.state.testSubmitted} percentage={Math.round(this.state.totalscore*100/totalmarks)}/>					
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
});		