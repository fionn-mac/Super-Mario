var PipeEntry : GameObject;
var UpperCam : GameObject;
var UnderworldCam : GameObject;
var Mario : GameObject;
var Standing : int;
var PipeSound : AudioSource;

function Start () {
	
}

function OnTriggerEnter(col : Collider) {
	Standing = 1;
}

function OnTriggerExit(col : Collider) {
	Standing = 0;
}

function Update() {
	if(Input.GetButtonDown("EnterPipe")) {
		if(Standing == 1) {
			transform.position = Vector3(0, -1000, 0);
			WaitingForPipe();
		}
	}
}

function WaitingForPipe() {
	PipeSound.Play();
	PipeEntry.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(2);
	PipeEntry.GetComponent("Animator").enabled = false;
	UnderworldCam.SetActive(true);
	UpperCam.SetActive(false);
	Mario.transform.position = Vector3(10.00, -12.00, -0);
}