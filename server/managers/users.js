const User = require("@models/user");
const jwt = require('jsonwebtoken');


exports.authenticateUser = async (accessToken) => {
  const apiUrl = "https://api.github.com/user";
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
  const responseData = await response.json();
  console.log(responseData)

  let user = await User.findOne({ github_id: responseData.id });

  if (!user) {
    user = new User({
      github_id: responseData.id,
      name: responseData.login,
    });
    await user.save();
  }
  console.log(user)
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  return token ;
};

exports.findUserToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const userId = await decoded.userId;
    const user = await User.findById( userId );
    return user;
  } catch (error) {
    throw new Error("findAUser: Error fetching user", error);
  }
};

exports.findAUser = async (userId) => {
  try {
    const user = await User.findById( userId );
    return user;
  } catch (error) {
    throw new Error("findAUser: Error fetching user", error);
  }
};

exports.updateAUser = async (userId, newData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, newData, { new: true });
    return user;
  } catch (error) {
    throw new Error("updateAUser: Error updating user", error);
  }
};
