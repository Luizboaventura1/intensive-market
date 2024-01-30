<template>
  <Header class="flex items-center relative">
    <main class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="flex items-center">
        <div class="mt-6 md:mt-0">
          <nav class="text-center md:text-start">
            <Logo />
            <Title>
              Aprenda a dominar as melhores estratégias do marketing digital
            </Title>
            <Subtitle>
              Inscreva-se no nosso <strong>INTENSIVE MARKET</strong> e tenha
              acesso a um conteúdo exclusivo mostrando o passo a passo para ter
              sucesso no marketing digital.
            </Subtitle>
          </nav>
          <Subtitle>
            🚀 Seus futuros resultados 👇
          </Subtitle>
          <Sales />
        </div>
      </div>
      <div class="flex justify-center items-center">
        <Form>
          <Logo class="mb-6" />
          <p class="text-zinc-300 mb-5">
            Faça já sua inscrição no nosso evento
            <strong>100% gratuito</strong> e garanta um
            <strong>bônus especial</strong> após preencher o formulário
          </p>
          <Input inputType="text" inputPlaceholder="Seu nome" />
          <Input inputType="email" inputPlaceholder="Seu email" />
          <Input inputType="tel" inputPlaceholder="Seu telefone" class="mb-6" />
          <CTAButton> Me inscrever agora! </CTAButton>
          <p class="text-center text-zinc-400 mt-3">
            Restam apenas <strong>8</strong> vagas!
          </p>
        </Form>
      </div>
    </main>
    <div
      class="circle w-[200px] h-[200px] opacity-35 md:opacity-70 bg-third-color rounded-full absolute -left-20 -top-20"
    ></div>
    <div
      class="circle w-[250px] h-[250px] opacity-35 md:opacity-70 bg-third-color rounded-full absolute -right-20 -bottom-20"
    ></div>
  </Header>
</template>

<script setup>
import Header from "./components/Header.vue";
import CTAButton from "./components/CTAButton.vue";
import Form from "./components/Form.vue";
import Input from "./components/Input.vue";
import Logo from "./components/Logo.vue";
import Subtitle from "./components/Text/Subtitle.vue";
import Title from "./components/Text/Title.vue";
import Sales from './components/Sales/index.vue'

</script>

<style lang="scss" scoped>
.circle {
  box-shadow: 0 0 30px #724ff0a2;
  filter: blur(90px);
}
</style>
