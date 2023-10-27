def individual_user(agent) -> dict:
    return{

        "id":str(todo["_id"]),
        "organization" : user['organization'],
        "email": user['email'],
        "password" : user['password'],
        "nodal_id" : user['nodal_id'],
        "sessions": user["sessions"],
        "status" : user["status"]
    }

def list_user((agents)->list):
    return [individual_serial((agent) for agent in agents)]