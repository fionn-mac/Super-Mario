var JumpSound : AudioSource;

function Start () {
	
}

function Update () {
	if(Input.GetButtonDown("Jump")) {
		JumpSound.Play();
	}
}
