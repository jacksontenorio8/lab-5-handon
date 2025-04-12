class CepController {
    constructor(cepService) {
        this.cepService = cepService;
    }

    async getAddressByCep(req, res) {
        const { cep } = req.params;

        try {
            const address = await this.cepService.fetchAddressByCep(cep);
            if (!address) {
                return res.status(404).json({ message: 'Endereço não encontrado' });
            }
            return res.status(200).json(address);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar o endereço', error: error.message });
        }
    }
}

export default CepController;