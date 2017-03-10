var XPos : float = transform.position.x;
var YPos : float = transform.position.y;
var ZPos : float = transform.position.z;

function OnTriggerEnter (col : Collider) {
	transform.GetComponent.<Collider>().isTrigger = false;
	if (col.GameObject.tag == "Player") {
		this.transform.position = Vector3(XPos, YPos+0.2, ZPos);
		yield WaitForSeconds(0.08);
		this.transform.position = Vector3(XPos, YPos+0.2, ZPos);
		yield WaitForSeconds(0.25);
		transform.GetComponent.<Collider>().isTrigger = true;
	}
}