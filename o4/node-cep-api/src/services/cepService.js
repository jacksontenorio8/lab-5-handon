class CepService {
    async getAddressByCep(cep) {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error('Error fetching data from ViaCEP');
        }
        const data = await response.json();
        return data;
    }
}

export default CepService;