class Emprestimo {
    constructor(id, alunoId, livroId, dataEmprestimo, dataDevolucao) {
        this.id = id;
        this.alunoId = alunoId;
        this.livroId = livroId;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }
  }
  
  module.exports = Emprestimo;
  