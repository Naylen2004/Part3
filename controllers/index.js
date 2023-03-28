export function DisplayHomePage(req, res, next){
    res.render('index');
}
export function DisplaySurveyPage(req, res, next){
    res.render('survey');
}
export function DisplayNewSurveyPage(req, res, next){
    res.render('createnewsurvey');
}
export function ViewNewSurveyPage(req, res, next){
    res.render('viewnewsurvey');
}