describe('Calculadora, 4 operações', () => {

  before(async () => {
    const num1 = await driver.$("id:com.android.calculator2:id/digit_1"); // Verificar se realmente está na calculadora
    await $(num1).waitForDisplayed();

    //const el1 = await driver.$("xpath://android.widget.Button[@resource-id=\"com.android.calculator2:id/digit_2\"]");

  });

  it("Soma", async () => {
    const numero1 = await driver.$("id:com.android.calculator2:id/digit_2");
    await numero1.click();
    const numero2 = await driver.$("id:com.android.calculator2:id/digit_7");
    await numero2.click();
    const operadorMais = await driver.$("accessibility id:plus");
    await operadorMais.click();
    const numero3 = await driver.$("id:com.android.calculator2:id/digit_3");
    await numero3.click();
    const numero4 = await driver.$("id:com.android.calculator2:id/digit_8");
    await numero4.click();
    const operadorIgual = await driver.$("accessibility id:equals");
    await operadorIgual.click();

    const resultado = await driver.$("id:com.android.calculator2:id/result");
    await resultado.click();
    const visor = await driver.$("accessibility id:clear");
    await visor.click();

  })

  it("Subtação", async () => {
    const numero1 = await driver.$("id:com.android.calculator2:id/digit_7");
    await numero1.click();
    const numero2 = await driver.$("id:com.android.calculator2:id/digit_2");
    await numero2.click();
    const operadorMenos = await driver.$("accessibility id:minus");
    await operadorMenos.click();
    const numero3 = await driver.$("id:com.android.calculator2:id/digit_1");
    await numero3.click();
    const numero4 = await driver.$("id:com.android.calculator2:id/digit_5");
    await numero4.click();
    const operadorIgual = await driver.$("accessibility id:equals");
    await operadorIgual.click();

    const resultado = await driver.$("id:com.android.calculator2:id/result");
    await resultado.click();
    const visor = await driver.$("accessibility id:clear");
    await visor.click();
  })

  it("Multiplicação", async () => {
    const numero1 = await driver.$("id:com.android.calculator2:id/digit_2");
    await numero1.click();
    const numero2 = await driver.$("id:com.android.calculator2:id/digit_6");
    await numero2.click();
    const operadorMultiplicar = await driver.$("accessibility id:multiply");
    await operadorMultiplicar.click();
    const numero3 = await driver.$("id:com.android.calculator2:id/digit_7");
    await numero3.click();
    const operadorIgual = await driver.$("accessibility id:equals");
    await operadorIgual.click();

    const resultado = await driver.$("id:com.android.calculator2:id/result");
    await resultado.click();
    const visor = await driver.$("accessibility id:clear");
    await visor.click();
  })

  it("Divisão", async () => {
    const numero1 = await driver.$("id:com.android.calculator2:id/digit_6");
    await numero1.click();
    const numero2 = await driver.$("id:com.android.calculator2:id/digit_9");
    await numero2.click();
    const operadorDividir = await driver.$("accessibility id:divide");
    await operadorDividir.click();
    const numero3 = await driver.$("id:com.android.calculator2:id/digit_3");
    await numero3.click();
    const operadorIgual = await driver.$("accessibility id:equals");
    await operadorIgual.click();

    const resultado = await driver.$("id:com.android.calculator2:id/result");
    await resultado.click();
    const visor = await driver.$("accessibility id:clear");
    await visor.click();
  })
})