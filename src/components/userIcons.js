export const userIcons = [];

for (let i = 1; i <= 20; i++) {
  userIcons.push({
    iconPath: require(`../assets/avatars/${i}.svg`),
    iconId: i
  });
}

const imgAdd = () => {
  userIcons.forEach(item => {
    const imagePath = userIcons.find(icon => icon.iconId === item.iconId)?.iconPath;
    if (imagePath) {
      item.iconPath = imagePath;
    }
  });
}

imgAdd();