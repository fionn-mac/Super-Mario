var Xpos : float;
var Ypos : float;
var Zpos : float;

function Start() {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	Zpos = transform.position.z;
}

function OnTriggerEnter(col : Collider) {
	transform.GetComponent.<Collider>().isTrigger = false;

	if(col.gameObject.tag == "Player") {
		this.transform.position = Vector3(Xpos, Ypos + 0.2, Zpos);
		yield WaitForSeconds(0.08);

		this.transform.position = Vector3(Xpos, Ypos, Zpos);
		yield WaitForSeconds(0.25);

		transform.GetComponent.<Collider>().isTrigger = true;
	}
}