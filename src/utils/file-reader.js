export default async file => {
  return await new Promise(function(resolve, reject) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(loadEvent) {
      if (loadEvent.target.error) {
        reject("Arquivo Inválido");
        return;
      }
      resolve(loadEvent.target.result);
    };
  });
};
