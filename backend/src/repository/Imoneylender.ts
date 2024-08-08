interface ImoneylenderDTO {
	userId: number;
	valor: string;
	option: string;
	pago: string;
}

interface Imoneylender {
	create(data: ImoneylenderDTO): Promise<any>;
	list(): Promise<any>;
	update(data: ImoneylenderDTO): Promise<any>;
	delete(userName: string): Promise<ImoneylenderDTO>;
	findbyusername(data: ImoneylenderDTO): Promise<any>;
}

export { ImoneylenderDTO, Imoneylender };

