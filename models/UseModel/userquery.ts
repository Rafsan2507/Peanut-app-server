import User from "./userModel";

export async function findAllUser () {
    try {
      const user = await User.findAll();
  
      return user;
    } catch (error) {
      throw new Error('Error finding all users');
    }
  }

export async function findUser (id: number) {
  try {
    const user = await User.findAll({
      where: {
        id: id
      }
    });
    return user;
  } catch (error) {
    throw new Error('Error finding user.');
  }
}

export async function addUser (data: { firstname: string, lastname: string, username: string, age: number, email: string, password: string}) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw new Error('Error adding user.');
    }
  }

  export async function findOneUser(email: string) {
    try {
      const user2 = await User.findOne({
        where: {
          email: email
        }
      });
  
      return user2;
    } catch (error) {
      throw new Error('Error login');
    }
  }

  export async function findOneUser2 (id: number) {
    try {
      const user2 = await User.findOne({
        where: {
          id: id
        }
      });
  
      return user2;
    } catch (error) {
      throw new Error('Error login');
    }
  }