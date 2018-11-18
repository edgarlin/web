Survey.StylesManager.applyTheme("default");

var json = {
  questions: [
    {
      name: "name",
      type: "text",
      title: "Please enter your name:",
      placeHolder: "Jon Snow"
    },
    {
      name: "birthdate",
      type: "text",
      inputType: "date",
      title: "Your birthdate:"
    },
    {
      type: "multipletext",
      name: "pricelimit",
      title: "What is the... ",
      colCount: 2,
      items: [
        {
          name: "mostamount",
          title: "Most amount you would every pay for a product like ours"
        },
        {
          name: "leastamount",
          title: "The least amount you would feel comfortable paying"
        }
      ]
    },
    {
      type: "matrix",
      name: "Quality",
      title:
        "Please indicate if you agree or disagree with the following statements",
      columns: [
        {
          value: 1,
          text: "Strongly Disagree"
        },
        {
          value: 2,
          text: "Disagree"
        },
        {
          value: 3,
          text: "Neutral"
        },
        {
          value: 4,
          text: "Agree"
        },
        {
          value: 5,
          text: "Strongly Agree"
        }
      ],
      rows: [
        {
          value: "affordable",
          text: "Product is affordable"
        },
        {
          value: "does what it claims",
          text: "Product does what it claims"
        },
        {
          value: "better then others",
          text: "Product is better than other products on the market"
        },
        {
          value: "easy to use",
          text: "Product is easy to use"
        }
      ]
    },
    {
      type: "matrixdynamic",
      name: "Current Level of Function",
      columnLayout: "vertical",
      titleLocation: "hidden",
      minRowCount: 1,
      maxRowCount: 5,
      columns: [
        {
          name: "Date",
          title: "Date",
          cellType: "text",
          inputType: "date"
        },
        {
          name: "AmbDistance",
          title: "Amb Distance",
          cellType: "text"
        },
        {
          name: "Amb Assistance",
          cellType: "dropdown",
          choices: ["D", "MAX", "MOD", "MIN"]
        },
        {
          name: "Standing Tolerance",
          cellType: "text"
        },
        {
          name: "UE Strength",
          cellType: "text"
        },
        {
          name: "Cognitive Function",
          cellType: "comment"
        }
      ],
      choices: [1],
      cellType: "comment",
      confirmDelete: true,
      addRowText: "Add Date +",
      removeRowText: "Remove"
    },
    {
      type: "paneldynamic",
      name: "relatives",
      title: "Please enter all blood relatives you know",
      renderMode: "progressTop",
      templateTitle: "Information about: {panel.relativeType}",
      templateElements: [
        {
          name: "relativeType",
          type: "dropdown",
          title: "Relative",
          choices: ["father", "mother", "brother", "sister", "son", "dauhter"],
          isRequired: true
        },
        {
          name: "isalive",
          type: "radiogroup",
          title: "Alive?",
          startWithNewLine: false,
          isRequired: true,
          colCount: 0,
          choices: ["Yes", "No"]
        },
        {
          name: "liveage",
          type: "dropdown",
          title: "Age",
          isRequired: true,
          startWithNewLine: false,
          visibleIf: "{panel.isalive} = 'Yes'",
          choices: [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60]
        },
        {
          name: "deceasedage",
          type: "dropdown",
          title: "Deceased Age",
          isRequired: true,
          startWithNewLine: false,
          visibleIf: "{panel.isalive} = 'No'",
          choices: [
            {
              value: -1,
              text: "Unknown"
            },
            1,
            2,
            3,
            4,
            5,
            10,
            20,
            30,
            40,
            50,
            60
          ]
        },
        {
          name: "causeofdeathknown",
          type: "radiogroup",
          title: "Cause of Death Known?",
          isRequired: true,
          colCount: 0,
          startWithNewLine: false,
          visibleIf: "{panel.isalive} = 'No'",
          choices: ["Yes", "No"]
        },
        {
          name: "causeofdeath",
          type: "text",
          title: "Cause of Death",
          isRequired: true,
          startWithNewLine: false,
          visibleIf:
            "{panel.isalive} = 'No' and {panel.causeofdeathknown} = 'Yes'"
        },
        {
          type: "panel",
          name: "moreInfo",
          state: "expanded",
          title: "Detail Information about: {panel.relativeType}",
          elements: [
            {
              type: "matrixdynamic",
              name: "relativeillness",
              title: "Describe the illness or condition.",
              rowCount: 0,
              columns: [
                {
                  name: "illness",
                  cellType: "dropdown",
                  title: "Illness/Condition",
                  choices: [
                    "Cancer",
                    "Heart Disease",
                    "Diabetes",
                    "Stroke/TIA",
                    "High Blood Pressure",
                    "High Cholesterol or Triglycerides",
                    "Liver Disease",
                    "Alcohol or Drug Abuse",
                    "Anxiety, Depression or Psychiatric Illness",
                    "Tuberculosis",
                    "Anesthesia Complications",
                    "Genetic Disorder",
                    "Other – describe"
                  ],
                  isRequired: true
                },
                {
                  name: "description",
                  cellType: "text",
                  title: "Describe",
                  isRequired: true
                }
              ]
            }
          ]
        }
      ],
      panelCount: 2,
      panelAddText: "Add a blood relative",
      panelRemoveText: "Remove the relative"
    }
  ]
};

var survey = new Survey.Model(json);
var surveyId = "YourSurveyId";
var questionPrefix = ".";

function addQuestionIntoResultsCore(results, namePrefix, name, value, qType) {
  var prefix = !!namePrefix ? namePrefix + questionPrefix : "";
  results.push({
    surveyId: surveyId,
    question: prefix + name,
    answer: value,
    questionType: qType
  });
}

function addQuestionIntoResults(q, results, namePrefix) {
  addQuestionIntoResultsCore(results, namePrefix, q.name, q.value, q.getType());
}

function addQuestionListIntoResults(questions, results, namePrefix) {
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    if (q.getType() == "multipletext") {
      for (var index = 0; index < q.items.length; index++) {
        addQuestionIntoResults(q.items[index].editor, results, q.name);
      }
    } else if (q.getType() == "matrix") {
      for (var rowIndex = 0; rowIndex < q.visibleRows.length; rowIndex++) {
        var row = q.visibleRows[rowIndex];
        if (!row.value) continue;
        addQuestionIntoResultsCore(
          results,
          namePrefix,
          q.name + "row_" + row.text,
          row.value,
          q.getType()
        );
      }
    } else if (q.getType() == "matrixdynamic") {
      for (var rowIndex = 0; rowIndex < q.visibleRows.length; rowIndex++) {
        for (var colIndex = 0; colIndex < q.columns.length; colIndex++) {
          addQuestionIntoResults(
            q.visibleRows[rowIndex].cells[colIndex].question,
            results,
            namePrefix +
              q.name +
              "row_" +
              (rowIndex + 1).toString() +
              questionPrefix +
              q.columns[colIndex].name
          );
        }
      }
    } else if (q.getType() == "paneldynamic") {
      for (var panelIndex = 0; panelIndex < q.panels.length; panelIndex++) {
        addQuestionListIntoResults(
          q.panels[panelIndex].questions,
          results,
          namePrefix +
            q.name +
            questionPrefix +
            "panel_" +
            (panelIndex + 1).toString()
        );
      }
    } else {
      addQuestionIntoResults(q, results, namePrefix);
    }
  }
}

survey.onComplete.add(function(survey, options) {
  var data = survey.data;
  var surveyResults = [];
  addQuestionListIntoResults(survey.getAllQuestions(), surveyResults, "");
  document.querySelector("#surveyResult").innerHTML =
    "result: " + JSON.stringify(surveyResults);
});

$("#surveyElement").Survey({
  model: survey
});
