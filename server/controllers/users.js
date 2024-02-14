const { authenticateUser, findAUser, updateAUser, findUserToken } = require("@managers/users");

exports.authUser = async (req, res) => {
  try {
    const githubCode = req.body.code;
    const apiUrl = "https://github.com/login/oauth/access_token";
    const params = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${githubCode}`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(`${apiUrl}${params}`, requestOptions);
    const responseData = await response.json();
    const accessToken = await responseData.access_token;
    const token = await authenticateUser(accessToken);
    console.log(token)
    res.status(200).json(token);
  } catch (error) {
    res.status(500).send("authUser: Error authenticating user")
  }
 
};

exports.getUserToken = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await findUserToken(token);

    if (!token) {
      return res.status(400).send("getUserToken: token required");
    }

    if (!user) {
      return res.status(404).send("getUserToken: User Not Found");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("getUserToken: Internal Error");
  }
};

exports.getAUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await findAUser(userId);

    if (!userId) {
      return res.status(400).send("getAuser: userId required");
    }

    if (!user) {
      return res.status(404).send("getAuser: User Not Found");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("getAuser: Internal Error");
  }
};

exports.patchAUser = async (req, res) => {
  const { userId } = req.params;
  const { newData } = req.body;

  if (!userId || !newData) {
    return res.status(404).send("patchAUser: userId and new data required");
  }
  try {
    const user = await updateAUser(userId, newData);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("patchAUser: Internal Error");
  }
};
